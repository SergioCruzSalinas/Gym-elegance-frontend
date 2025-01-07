import { useMutation } from "@tanstack/vue-query";
import { defineComponent, ref, watch } from "vue";
import { createCoachAction  } from "../actions";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from 'yup';
import CustomInput from "@/modules/principal/common/CustomInput.vue";


const validationSchema = yup.object({
    nombre: yup.string().required(),
    correo_electronico: yup.string().required(),
    telefono: yup.string().required(),
    contrasenia: yup.string().required(),
});




export default defineComponent({
    components: {
        CustomInput,

    },



    setup() {

        const router = useRouter();
        const mensaje = ref('');
        const visible = ref(false);
     

        const { mutate, isSuccess: isCreateSuccess, data: createdCoach } = useMutation({
            mutationFn: createCoachAction,
        });



        const { values, errors, defineField, resetForm, handleSubmit } = useForm({
            validationSchema,
        })

        
        const [nombre, nombreAttrs] = defineField('nombre');
        const [correo_electronico, correo_electronicoAttrs] = defineField('correo_electronico');
        const [telefono, telefonoAttrs] = defineField('telefono');
        const [contrasenia, contraseniaAttrs] = defineField('contrasenia');
        
        
 
        

        const onSubmit = handleSubmit( async (values) => {
            mutate(values);
        })


        watch(isCreateSuccess, (value) => {
            
            if (!value) return;
        
            mensaje.value = "El Coach se ha creado correctamente";
        
            router.replace(`/admin/instructores/lista-instructores/${createdCoach.value.data?.id}`);
        
            resetForm({
                values: updatedCoach.value
            });
        });

        
     


        return {
            values,
            mensaje,
            visible,


            errors,
            nombre,
            nombreAttrs,
            correo_electronico,
            correo_electronicoAttrs,
            telefono,
            telefonoAttrs,
            contrasenia,
            contraseniaAttrs,


            onSubmit,

        }
    }
})