<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal">
        <header class="modal-header">
            <slot name="header">
            Current Nominations

            <button
                type="button"
                class="btn-close"
                @click="close"
            >
                x
            </button>
            </slot>
        </header>
        <section class="modal-body">
            <slot name="body">
                <div
                    v-for="(item, index) in currentNominations"
                    :key="index"
                    class="nominee"
                >
                    <strong>{{ item.title }}</strong> - {{ item.year }}
                    <button class="remove" @click="removeNomination({title: item.title, year: item.year})">x</button>
                </div>
            </slot>
        </section>
        </div>
    </div>
  </transition>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'modal',

    computed: {
        ...mapState('nominationStore', ['currentNominations']),
    },

    methods: {
        ...mapActions('nominationStore', ['removeMovie']),

      close() {
        this.$emit('close');
      },

      removeNomination(nomination) {
        this.removeMovie(nomination);
      }
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #304743;
    justify-content: space-between;
    padding: 15px;
    display: flex;
    font-weight: bold;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .nominee {
      padding: 10px 5px;
  }

  .remove {
      float: right;
      background-color: darkred;
      border-radius: 16px;
      color: white;
      border: none;
      margin-left: 25px;
  }
</style>