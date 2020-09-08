<template>
    <div class="gallery-panel">
        <img :src="posterURL" :alt="title" onerror="this.onerror=null; this.src='https://icon-library.com/images/no-image-icon/no-image-icon-5.jpg'">
        <button class="button" :disabled="disabledButton" @click="nominate">Nominate</button>
        <strong><p style="color:white">{{ title }}</p></strong>
        <p style="color:white;">{{ release }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import nominationStore from './store/modules/nominationStore';

export default {
  components: {},

  props: {
    title: {
        type: String,
        required: true,
    },
    posterURL: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        required: true,
    }
  },

  data() {
    return {
    }
  },

  computed: {
      ...mapState('nominationStore', ['currentNominations']),

      disabledButton() {
        const match = this.currentNominations.filter(val => ( val.title === this.title && val.year === this.release ));
        if (match.length > 0) {
            return true;
        } else {
            return false;
        }
      }
  },

  methods: {
      ...mapActions('nominationStore', ['nominateMovie']),

    nominate(e) {
        if (this.currentNominations.length === 5) {
            this.$alert("You cannot add any more movies since you have reached the limit of 5 nominations!")
        } else {
            // e.target.disabled = true;
            this.nominateMovie({
                title: this.title,
                year: this.release
            })
            if (this.currentNominations.length === 5) {
                this.$alert("You have reached the limit of nominatibg 5 movies. While you can replace nominations, you cannot add more than 5 nominations.");
            }
        }
    }
  }
}
</script>

<style scoped>
.gallery-panel img {
    width: 80%;
    height: 370px;
    object-fit: cover;
    border-radius: 0.75rem;
    transition: filter 0.5s ease-in-out;
  }

  .gallery-panel img:hover{
    filter: grayscale(90%);
  }

  .button {
    position: absolute;
    transform: translate(-180%, 400%);
    background-color: yellowgreen;
    color: black;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    visibility: hidden;
    transition: visibility 0.5s ease-in;
    text-decoration: none;
    font-weight: bold;
  }

.button:disabled {
  cursor: not-allowed;
  background-color: gray;
}

  .gallery-panel img:hover + .button, .button:hover {
      visibility: visible;
  }
</style>
