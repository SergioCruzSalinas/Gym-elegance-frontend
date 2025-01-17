import { useMutation, useQuery } from "@tanstack/vue-query";
import { defineComponent, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { getSubscriptionByIdAction, updateCreateSubscriptionAction } from "../actions";

import * as yup from 'yup';
import { useForm } from "vee-validate";
import CustomInput from "@/modules/principal/common/CustomInput.vue";
import { formatDate } from "@/modules/principal/utils/dateUtils";
import { getMembershipsAction } from "@/modules/membresias/actions";
import { Membership } from "@/modules/membresias/interfaces/membership.interface";



const validationSchema = yup.object({
    id_usuario: yup.string().required(),
    id_membresia: yup.string().required(),
    fecha_inicio: yup.string().required(),
});



export default defineComponent({
    components:{
        CustomInput,

    },
    props: {
        idSubscription: {
            type: String,
            required : true,
        },
    },

    setup(props) {
        const router = useRouter();
        const mensaje = ref('');
        const memberships = ref([]);


        const { data: subscription, isError, isLoading, refetch} = useQuery({
            queryKey: ['subscription' , props.idSubscription],
            queryFn: () => getSubscriptionByIdAction(props.idSubscription),
            retry: false
        });

        const { data: membershipsData } = useQuery({
            queryKey:["memberships"],
            queryFn: getMembershipsAction,
        })

        const {mutate, isSuccess: isUpdateSuccess, data: updatedSubscription} = useMutation({
            mutationFn: updateCreateSubscriptionAction
            
        });


        const { values, defineField, errors, resetForm, handleSubmit } = useForm({
            validationSchema,
        });


        const [ id_usuario, id_usuarioAttrs ] = defineField('id_usuario');
        const [ id_membresia, id_membresiaAttrs ] = defineField('id_membresia');
        const [ fecha_inicio, fecha_inicioAttrs ] = defineField('fecha_inicio');
      


        const onSubmit = handleSubmit ( async(values) => {
            const formattedValues = {
                ...values,
                fecha_inicio: formatDate(values.fecha_inicio) 
            }
            mutate(formattedValues)
        });





        watchEffect(() => {
            if(isError.value && !isLoading.value) {
                router.replace({name: 'listaInscripciones'});
            }
        });

        watch(subscription, () => {
            if(!subscription.value || !subscription.value.data) return;


            resetForm({
                values: subscription.value.data
            });
        },{
            deep: true,
            immediate: true,
        });

        watch(isUpdateSuccess, (value) => {
            if(!value)return;

            mensaje.value = "Inscripción actualizada correctamente"
            router.replace(`/admin/inscripciones/lista/${updatedSubscription.value.data.id}`);

            resetForm({
                values: updatedSubscription.value
            });
        });


        watch(
            () => props.idSubscription,
            () => {
                refetch()
            },
        );

        watchEffect(() => {
            if (!membershipsData.value || !membershipsData.value.data) return;
            
                memberships.value = membershipsData.value?.data.map((membership: Membership) => membership.id);
            
        });
        

        
  


        return {
            values,
            mensaje,
            errors,
            subscription,
            memberships,

            id_usuario,
            id_usuarioAttrs,
            id_membresia,
            id_membresiaAttrs,
            fecha_inicio,
            fecha_inicioAttrs,

            onSubmit,

        }





    }
});