import { useMutation, useQuery } from "@tanstack/vue-query";
import { defineComponent, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from 'yup';
import CustomInput from "@/modules/principal/common/CustomInput.vue";
import { activityIdAction, updateCreateActivity } from "../actions";
import { formatDate } from "@/modules/principal/utils/dateUtils";


const validationSchema = yup.object({
    descripcion: yup.string().required(),
    id_instructor: yup.string().required(),
    cupo: yup.string().required(),
    fecha: yup.string(),
    hora_inicio: yup.string(),
    hora_fin: yup.string(),
});

export default defineComponent({
    components: {
        CustomInput,

    },

    props: {
        idActivity: {
            type: Number,
            required: false,
        },
    },

    setup(props) {

        const router = useRouter();
        const mensaje = ref('');
     
        const { data: activity, isError, isLoading, refetch } = useQuery({
            queryKey: ["activity", props.idActivity],
            queryFn: () => activityIdAction(Number(props.idActivity)),
            retry: false,
        });

        const { mutate, isSuccess: isUpdateSuccess, data: updatedActivity } = useMutation({
            mutationFn: updateCreateActivity,
        });

        const { values, errors, defineField, resetForm, handleSubmit } = useForm({
            validationSchema,
        })

        const [descripcion, descripcionAttrs] = defineField('descripcion')
        const [id_instructor, id_instructorAttrs] = defineField('id_instructor')
        const [fecha, fechaAttrs] = defineField('fecha')
        const [cupo, cupoAttrs] = defineField('cupo')
        const [hora_inicio, hora_inicioAttrs] = defineField('hora_inicio')
        const [hora_fin, hora_finAttrs] = defineField('hora_fin')
        
        
        const onSubmit = handleSubmit( async (values) => {

            const formattedValues = {
                ...values,
                fecha: formatDate(values.fecha)
            }
            
            mutate(formattedValues);
        });

        watchEffect(() => {
            if(isError.value && !isLoading.value) {
                router.replace('/admin/administrarActividades/lista-actividades');

            }
        });

        watch(activity, () => {
            if( !activity.value || !activity.value?.data) return;


            resetForm({
                values: activity.value?.data,
            });
        },{
            deep: true,
            immediate: true,
        });

        watch(isUpdateSuccess, (value) => {
            
            if (!value) return;
        
            mensaje.value = "La actividad se ha actualizado correctamente";
        
            router.replace(`/admin/administrarActividades/lista-actividades/${updatedActivity.value.data?.id}`);
        
            resetForm({
                values: updatedActivity.value
            });
        });

        
        watch(
            () => props.idActivity,
            () => {
                refetch();
            },    
        );

        return {
            values,
            mensaje,
            errors,
            descripcion,
            descripcionAttrs,
            id_instructor,
            id_instructorAttrs,
            fecha,
            fechaAttrs,
            cupo,
            cupoAttrs,
            hora_inicio,
            hora_inicioAttrs,
            hora_fin,
            hora_finAttrs,


            onSubmit,

        }
    }
})