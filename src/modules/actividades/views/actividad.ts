import { useQuery } from "@tanstack/vue-query";
import { defineComponent } from "vue";
import { ActivityIdAction } from "../actions";






export default defineComponent({
    props: {
        activityId: {
            type: String,
            required: true
        },
    },



    setup(props) {
        console.log("hola mundo")

        const { data: idActivity } = useQuery({
            queryKey: ["activity", props.activityId],
            queryFn: ActivityIdAction(Number(props.activityId)),
            retry: false
        })

        console.log(idActivity)
    }
})
