<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="modelId" aria-hidden="true">
      <div class="modal-dialog" :class="`modal-${size}`" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">{{ title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <slot name='body'></slot>
          </div>
          <div class="modal-footer">
            <slot name='footer'></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import $ from 'jquery'
export default {
  props: {
    size: { type: String, default: 'md' },
    title: { type: String, default: 'Propriedade title vazia' }
  },

  methods: {
    ...mapActions('global', ['ActionSetShowmodal'])
  },

  mounted () {
    $('#modelId').on('hidden.bs.modal', () => {
      this.ActionSetShowmodal(false)
    })
  },

  computed: {
    ...mapState('global', ['show'])
  },

  watch: {
    show: (value) => {
      if (value) {
        $('#modelId').modal('show')
      } else {
        $('#modelId').modal('hide')
      }
    }
  }
}
</script>
