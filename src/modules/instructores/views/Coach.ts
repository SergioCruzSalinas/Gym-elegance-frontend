import { useMutation, useQuery } from "@tanstack/vue-query";
import { defineComponent, ref, watch, watchEffect } from "vue";
import { getCoachByIdACtion, updateCreateCoachAction,  } from "../actions";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from 'yup';
import CustomInput from "@/modules/principal/common/CustomInput.vue";


const validationSchema = yup.object({
    nombre: yup.string().required(),
    correo_electronico: yup.string().required(),
    telefono: yup.string().required(),
});




export default defineComponent({
    components: {
        CustomInput,

    },

    props: {
        idCoach: {
            type: String,
            required: true,
        },
    },



    setup(props) {

        const router = useRouter();
        const mensaje = ref('');
     
       

        const { data: coach, isError, isLoading, refetch } = useQuery({
            queryKey: ["coach", props.idCoach],
            queryFn: () => getCoachByIdACtion(props.idCoach),
            retry: false,
        });

        const { mutate, isSuccess: isUpdateSuccess, data: updatedCoach } = useMutation({
            mutationFn: updateCreateCoachAction,
        });



        const { values, errors, defineField, resetForm, handleSubmit } = useForm({
            validationSchema,
        })

        
        const [nombre, nombreAttrs] = defineField('nombre')
        const [correo_electronico, correo_electronicoAttrs] = defineField('correo_electronico')
        const [telefono, telefonoAttrs] = defineField('telefono')
        
        
 
        

        const onSubmit = handleSubmit( async (values) => {
            mutate(values);
        })



        watchEffect(() => {
            if(isError.value && !isLoading.value) {
                router.replace('/admin/instructores/lista-instructores')

            }
        });

        watch(coach, () => {
            if( !coach.value || !coach.value.data) return;


            resetForm({
                values: coach.value.data,
            },{
                deep: true,
                immediate: true,
            });
        },{
            deep: true,
            immediate: true,
        });

        watch(isUpdateSuccess, (value) => {
            
            if (!value) return;
        
            mensaje.value = "Coach actualizado correctamente";
        
            router.replace(`/admin/instructores/lista-instructores/${updatedCoach.value.data?.data?.id}`);
        
            resetForm({
                values: updatedCoach.value
            });
        });

        
        watch(
            () => props.idCoach,
            () => {
                refetch();
            },    
        );

        return {
            values,
            mensaje,
            errors,
            nombre,
            nombreAttrs,
            correo_electronico,
            correo_electronicoAttrs,
            telefono,
            telefonoAttrs,
            onSubmit,

        }
    }
})