
<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="coin"
        label="Monedas"
          mask="AAAA"
        hint="Moneda (hasta 4 letras)"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese la moneda']"
      />

      <q-input
        filled
        
        v-model="amount"
        label="Cantidad *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingrese la cantidad',
          val => val > 0 && val < 100 || 'Cantidad con . y sin separador de miles'
        ]"
      />
      <q-input
        v-model="price"
        label="Precio *"
        mask="#.###"
        fill-mask="0"
        reverse-fill-mask
        hint="1.14"
        input-class="text-right"
        
        
      />

      <q-toggle v-model="accept" label="aceptar" />

      <div>
        <q-btn label="Enviar" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>



<script>
import { useQuasar } from 'quasar'



import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const coin = ref(null)
    const amount = ref(null)
    const price = ref(0)
    const type = ref(false)
  const accept = ref(false)
    return {
      coin,
      amount,
      type,
      accept,
      price,
    
      onSubmit () {
       
        console.log(accept.value)
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'primero seleccione'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Enviado'
          })
        }
      },

      onReset () {
        coin.value = null
        amount.value = null
        price.value = 0
        type.value = false
        accept.value=false
      }
    }
  }
}
</script>

