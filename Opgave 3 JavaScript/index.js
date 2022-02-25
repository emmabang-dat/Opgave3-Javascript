Vue.createApp({

    data() {
        return {
            word: null,
            msg1: null,
            msg2: null,
            msg3: null,
            msg4: null,
            msg5: null,
            msg6: null,
        }
    },

    methods: {
        StringManipulation() {
            if (this.word === null | "")
            {
                this.word = "Skriv noget i feltet"
            }
            else {

            this.msg1 = this.word; 
            this.msg2 = this.word.toUpperCase();
            this.msg3 = this.word.toLowerCase();
            this.msg4 = this.word.charAt(0).toUpperCase() + this.word.slice(1);
            this.msg5 = this.word.slice(0,-1) + this.word.charAt(this.word.length-1).toUpperCase();
            this.msg6 = this.word.split("").reverse().join("");
           }
        }
    }

}).mount("#app")