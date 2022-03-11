<template>
<div>
  <header-page-component title='Criar Lista'></header-page-component>
  <formulario-lista>
    <div class="col-md-3" slot='inputs'>
      <input
      type="month"
      class="form-control form-control-sm"
      :class="requiredList.monthList"
      v-model="formList.monthList"
      v-on:change="setList"
      >
      <div
        class="invalid-feedback"
        v-if="requiredList.monthList"
        >
          Inclua uma data
        </div>
    </div>
    <button
      class="btn btn-sm btn-primary"
      v-on:click="salvarLista"
      slot='btn-salvar'
      >
        <div
        v-if="loader"
        class="spinner-border spinner-border-sm text-light"
        role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div v-else>
          <i class="fas fa-save mr-2"></i>
          Salvar
        </div>
      </button>
  </formulario-lista>

</div>
</template>

<script>
import HeaderPageComponent from '../../components/HeaderPageComponet'
import FormularioLista from './FormularioLista'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    FormularioLista,
    HeaderPageComponent
  },

  computed: {
    ...mapState('lista', ['list', 'itensLista']),
    ...mapState('auth', ['user'])
  },

  beforeMount () {
    this.ActionSetListaItens([])
    this.ActionSetList('')
  },

  data: () => ({
    loader: false,
    formList: {
      monthList: ''
    },
    requiredList: {
      'monthList': { 'is-invalid': false }
    }

  }),

  methods: {
    ...mapActions('lista', ['ActionSetListaItens', 'ActionSetList']),

    setList () {
      this.ActionSetList(this.formList.monthList)
    },

    async salvarLista () {
      this.loader = true

      if (this.verifyFormData('requiredList', 'formList')) {
        const dados = this.montarDados()
        const ref = this.$firebase.database().ref('lista')
        const id = ref.push().key
        await ref.child(id).set(dados, (erro) => {
          this.$router.push({ name: 'lista' })
          if (erro) {
            console.log(erro)
          } else {

          }
        })
      }
      this.loader = false
    },

    verifyFormData (rules, form) {
      let resposta = true
      Object.keys(this[rules]).map((item) => {
        if ((this[rules][item] && !this[form][item])) {
          this[rules][item] = { 'is-invalid': true }
          resposta = false
        } else if (this[rules][item]) {
          this[rules][item] = { 'is-invalid': false }
        }
      })
      return resposta
    },

    montarDados () {
      return {
        'usuario': {
          id: this.user.uid,
          email: this.user.email
        },
        data_lista: this.list,
        itens: this.itensLista
      }
    }

  }
}
</script>
