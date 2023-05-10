const ClassificarTriangulos = {
    data() {
        return {
            Lado1: "",
            Lado2: "",
            Lado3: "",
            tela: ""

        }
    },

    methods: {
        classificar: function () {
            if (this.Lado1 == "" || this.Lado2 == "" || this.Lado3 == "") {
                alert("Preencha os campos")
            } else {
                if (this.Lado1 == this.Lado2 && this.Lado2 == this.Lado3) {
                    this.tela = "O resultado é : Equlatero(todos os lados iguais)"

                    this.Lado1= "",
                    this.Lado2= "",
                    this.Lado3= ""

                }

                else if (this.Lado1 !== this.Lado2 && this.Lado2 !== this.Lado3 && this.Lado1 !== this.Lado3) {
                    this.tela = "O resultado é : Escaleno(todos lados diferentes)"

                    this.Lado1= "",
                    this.Lado2= "",
                    this.Lado3= ""
                }

                else if (this.Lado1 == this.Lado2 || this.Lado1 == this.Lado3 || this.Lado2 == this.Lado3) {
                    this.tela = "O resultado é :    Isóceles(dois lados iguais)"

                    this.Lado1= "",
                    this.Lado2= "",
                    this.Lado3= ""
                }
            }
        },

    }
}
Vue.createApp(ClassificarTriangulos).mount("#App")