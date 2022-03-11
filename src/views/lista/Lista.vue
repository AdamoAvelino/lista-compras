<template>
<div>
  <header-page-component title='Listas de compra'>
    <div slot='content-right'>
        <button class='btn btn-primary btn-sm' v-on:click.prevent="createList">
        <i class="fa fa-plus-circle mr-1" aria-hidden="true"></i>
        Adicinar lista
      </button>
    </div>
  </header-page-component>
    <div class="row">
  <div class="container">
      <div class="col-md-12">
        <ul class="list-group">
          <li
          class="list-group-item d-flex justify-content-between align-items-start"
          :key="key"
          v-for="(item, key) in listar"
          >
            <div>
              <p>
                <strong>Lista de Compra do mês: </strong>
                 <span v-data-br="item.data_lista"></span>
              </p>
              <p>
                <strong>Montada por: </strong>
                 <span>{{ item.usuario.email }}</span>
              </p>
              <span class="badge badge-secondary badge-pill">
                {{ item.itens.length }}
                Itens
              </span>
            </div>

            <div class='d-flex justify-content-center align-items-center flex-column'>
              <strong>Valor Gasto</strong>
              <span v-moeda-br="item.valorLista"></span>
            </div>

            <div
            class='d-flex flex-column justify-content-center align-items-center'
            >
                <small
                  :class="`text-${item.status.classeName}`"
                >
                  {{ isOpen = item.status.isOpen }}
                </small>
              <span
              class="badge badge-pill"
              :class="`badge-${item.status.classeName}`"
              v-if="item.status.quantidade"
              >
                {{ item.status.quantidade }}
              </span>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import HeaderPageComponent from '../../components/HeaderPageComponet'
import { mapActions } from 'vuex'
export default {
  components: {
    HeaderPageComponent
  },

  data: () => ({
    list: []
  }),

  computed: {
    listar () {
      return Object.keys(this.list).map((i) => {
        const list = this.list
        let valorLista = 0
        const close = list[i].itens.filter((item) => {
          valorLista += item.preco ? parseInt(item.preco) : 0
          return !!item.preco
        })

        let status
        if (close.length !== list[i].itens.length) {
          status = {
            isOpen: 'Em Aberto',
            classeName: 'warning',
            quantidade: list[i].itens.length - close.length
          }
        } else {
          status = {
            isOpen: 'Fechado',
            classeName: 'info',
            quantidade: 0

          }
        }
        list[i].valorLista = valorLista
        list[i].status = status
        return list[i]
      })
    }
  },

  beforeMount () {
    this.getList()
  },

  methods: {
    ...mapActions('global', ['ActionSetLoading']),

    createList () {
      this.$router.push({ name: 'criarlista' })
    },

    getList () {
      this.ActionSetLoading(true)
      const ref = this.$firebase.database().ref('/lista')

      ref.on('value', data => {
        const values = data.val()
        this.list = values
        this.ActionSetLoading(false)
        return true
      })
    }

  }

}
</script>
