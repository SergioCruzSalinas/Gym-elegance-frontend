import { defineComponent, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { createUpdateMembreship, idMembershipAction } from "../actions";
import { useForm } from 'vee-validate';
import CustomInput from "@/modules/principal/common/CustomInput.vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import * as yup from 'yup';




const validationSchema = yup.object({
    tipo : yup.string().required(),
    descripcion : yup.string().required(),
    precio : yup.number().integer().required(),
    dias_duracion : yup.number().integer().required(),
    mes_duracion : yup.number().integer().required(),

})


export default defineComponent({
    components: {
        CustomInput
    },
    props: {
        idMembresia: {
            type: String,
            required: true,
        },
    },



    setup(props) {

        const router = useRouter();
        const mensaje = ref('')

       

        const {data: membership, isError, isLoading, refetch} = useQuery({
            queryKey: ["membership", props.idMembresia],
            queryFn: () => idMembershipAction(props.idMembresia),
            retry: false,
        });

        const { mutate, isSuccess : isUpdateSuccess, data: updatedMembership } = useMutation({
            mutationFn: createUpdateMembreship,
        })

        const { values, defineField, errors, resetForm, handleSubmit } = useForm({
            validationSchema,
        });

      

        const [tipo, tipoAttrs] = defineField('tipo');
        const [descripcion, descripcionAttrs] = defineField('descripcion');
        const [precio, precioAttrs] = defineField('precio');
        const [dias_duracion, dias_duracionAttrs] = defineField('dias_duracion');
        const [mes_duracion, mes_duracionAttrs] = defineField('mes_duracion');


        const onSubmit = handleSubmit( async (values)=> {

            mutate(values)
        });
        

        watchEffect( () => {
            if(isError.value && !isLoading.value){
                router.replace('/admin/membresias/lista-membresias')

            }
        });

        watch(membership, () => {
            if(!membership.value || !membership.value?.data) return;


            resetForm({
                values: membership.value?.data
            })

        },{
            deep: true,
            immediate: true,
        })

        watch(isUpdateSuccess, (value) => {
            if(!value)return;


            mensaje.value = 'Membresia actualizada correctamente';
            router.replace(`/admin/membresias/lista-membresias/${updatedMembership.value.data?.data?.id}`)

            resetForm({
                values: updatedMembership.value
            })   
        });


        watch(
            () => props.idMembresia,
            () => {
              refetch();
            },
          );
        
        return {
            values,
            errors,
            mensaje,



            tipo, 
            tipoAttrs,
            descripcion, 
            descripcionAttrs,
            precio, 
            precioAttrs,    
            dias_duracion, 
            dias_duracionAttrs,
            mes_duracion,
            mes_duracionAttrs,

            onSubmit,

        }
   

    }
})