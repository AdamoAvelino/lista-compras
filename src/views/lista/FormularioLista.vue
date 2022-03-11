<template>
  <div>
    <form class="bg-dark-container p-3">
      <div class="row">
        <slot name='inputs'></slot>
        <div class="col-md-9">
          <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          v-on:click="showModal"
          >
            <i class="fa fa-plus-circle mr-2" aria-hidden="true"></i>
            Item
          </button>
        </div>
      </div>
    </form>

    <modal-component title='Inserir Item' size='lg' modalId="item">
      <form
      id='add-list'
      slot='body'
      v-on:submit.prevent="inserirItem"
      >
        <div class="row">

          <div class="col-md-4">
            <input
            ref='produto'
            type="text"
            class="form-control form-control-sm"
            :class="required.produto"
            v-model="formItem.produto"
            placeholder="Produto"
            >
            <div
            class="invalid-feedback"
            v-if="required.produto"
            >
              Preencha o Produto
            </div>

          </div>
          <div class="col-md-4">
            <input
            type="number"
            step="1.0"
            class="form-control form-control-sm"
            :class='required.quantidade'
            v-model="formItem.quantidade"
            placeholder="Quantidade"
            >
            <div
            class="invalid-feedback"
            v-if="required.quantidade"
            >
                Preencha a Quantidade.
            </div>

          </div>

          <div class="col-md-4">
            <input type="number"
            step="0.01"
            class="form-control form-control-sm"
            v-model="formItem.preco"
            placeholder="Preço"
            >
          </div>
        </div>
      </form>
      <button
      class='btn-primary btn btn-sm'
      slot="footer"
      form='add-list'
      >
      Inserir
      </button>
    </modal-component>
    <table
    v-if="itensLista.length > 0"
    class="table table-borderless text-white mt-2 bg-dark-container"
    >
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
            <button
            class="btn btn-outline-warning btn-sm mr-2"
            v-on:click="edit(key)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
            class="btn btn-outline-danger btn-sm"
            v-on:click="remove(key)"
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="itensLista.length > 0">
      <slot name='btn-salvar'></slot>
    </div>
  </div>
</template>

<script>

import ModalComponent from '../../components/ModalComponent'
import { mapState, mapActions } from 'vuex'

export default {

  name: 'Formulario',
  components: {
    ModalComponent
  },

  computed: {
    ...mapState('lista', ['list', 'itensLista'])
  },

  data: () => ({
    formItem: {
      produto: '',
      quantidade: '',
      preco: ''
    },

    editable: false,
    indiceEditable: null,

    required: {
      'produto': { 'is-invalid': false },
      'quantidade': { 'is-invalid': false }
    }

  }),

  methods: {
    ...mapActions('lista', ['ActionSetList', 'ActionSetListaItens']),

    inserirItem () {
      if (this.verifyFormData(this.required, this.formItem)) {
        if (this.editable) {
          this.itensLista[this.indiceEditable] = this.formItem
          this.ActionSetListaItens(this.itensLista)
          this.$root.$emit('Modal::Hide', 'item')
        } else {
          this.itensLista.push(this.formItem)
          this.ActionSetListaItens(this.itensLista)
          this.$refs.produto.focus()
        }
        this.formItem = {}
      }
    },

    verifyFormData (rules, form) {
      let resposta = true
      Object.keys(rules).map((item) => {
        if ((rules[item] && !form[item])) {
          rules[item] = { 'is-invalid': true }
          resposta = false
        } else if (rules[item]) {
          rules[item] = { 'is-invalid': false }
        }
      })
      return resposta
    },

    edit (position) {
      this.formItem = this.itensLista[position]
      this.editable = true
      this.indiceEditable = position
      this.showModal()
    },

    remove (position) {
      this.itensLista = this.itensLista.filter((indice) => {
        return position !== indice
      })
    },

    showModal () {
      this.$root.$emit('Modal::Show', 'item')
    }
  }
}
</script>

<style scoped lang='scss'>
.bg-dark-container{
  background: var(--dark);
}
</style>
