import {
    boot
} from 'quasar/wrappers'
import PocketBase from 'pocketbase';

const client = new PocketBase('http://localhost:8090');
async function lista() {
    const userData = await client.Users.authViaEmail("mersoler@gmail.com", "1234567890");
    const resultList = await client.Records.getList("resources", 1, 50, {
        filter: "created >= '2022-01-01 00:00:00'",
    });

    console.log(resultList)
    console.log(userData)
}
lista();


export default boot(({
    app
}) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$pb = PocketBase
        // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
        //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$clientPB = client
        // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
        //       so you can easily perform requests against your app's API
})

export {
    client
}