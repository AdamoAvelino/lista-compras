<template>
<div>
  <header-page-component title='Criar Lista'></header-page-component>
  <formulario>
    <div slot='content-formulario' class='col-sm-12'>
      <div class="row">
        <div class="col-md-3">
          <input type="month" class="form-control form-control-sm" name="inputName" id="inputName" placeholder="">
        </div>
        <div class="col-md-9">
          <button type="button" class="btn btn-sm btn-outline-primary" v-on:click="showModal">
            <i class="fa fa-plus-circle mr-2" aria-hidden="true"></i>
            Item
          </button>
        </div>
      </div>
    </div>
  </formulario>
  <modal-component title='Inserir Item' size='lg'>
    <formulario slot='body'>
      <div slot='content-formulario' class='col-sm-12'>
        <div class="row">
          <div class="col-md-4">
            <input type="text"
            class="form-control form-control-sm"
            v-model="formItem.produto"
            placeholder="Produto">
          </div>
          <div class="col-md-4">
            <input type="number"
            step="1.0"
            class="form-control form-control-sm"
            v-model="formItem.quantidade"
            placeholder="Quantidade">
          </div>
          <div class="col-md-4">
            <input type="number"
            step="0.01"
            class="form-control form-control-sm"
            v-model="formItem.preco"
            placeholder="Preço">
          </div>
        </div>
      </div>
    </formulario>
    <button class='btn-primary btn btn-sm'
    slot='footer'
    v-on:click='inserirItem'>Inserir
    </button>
  </modal-component>
  <table class="table text-white" v-if="itensLista.length > 0">
    <thead>
      <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Preço</th>
        <th>Açoes</th>
      </tr>
    </thead>
    <tbody>
      <tr
      :key="key"
      v-for="(item, key) in itensLista">
        <td>{{ item.produto }}</td>
        <td>{{ item.quantidade }}</td>
        <td>{{ item.preco }}</td>
        <td>
          <button class="btn btn-outline-warning btn-sm mr-2">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-outline-danger btn-sm">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="itensLista.length > 0">
    <button class="btn btn-sm btn-primary" v-on:click="salvarLista">
      <i class="fas fa-save mr-2"></i>
      Salvar
    </button>
    </div>
</div>
</template>

<script>
import HeaderPageComponent from '../../components/HeaderPageComponet'
import ModalComponent from '../../components/ModalComponent'
import Formulario from './Formulario'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    HeaderPageComponent,
    Formulario,
    ModalComponent
  },
  data: () => ({
    formItem: {
      produto: '',
      quantidade: '',
      preco: ''
    }
  }),

  computed: {
    ...mapState('lista', ['itensLista'])
  },
  methods: {
    ...mapActions('global', ['ActionSetShowmodal']),
    ...mapActions('lista', ['ActionSetListaItens']),

    inserirItem () {
      this.itensLista.push(this.formItem)
      this.ActionSetListaItens(this.itensLista)
      this.formItem = {}
      this.ActionSetShowmodal(false)
    },

    salvarLista () {
      // const ref = this.$firebase.database().ref('lista')
      // const id = ref.push().key
    },

    showModal () {
      this.ActionSetShowmodal(true)
    }
  },

  mounted () {
    this.ActionSetShowmodal(false)
    this.ActionSetListaItens([])
  }
}
</script>
