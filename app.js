var app = new Vue({
    el: "#app",
    data: {
        dibujoPrimerParrafo: false,
        caso: 5,
        btnLabel: 'Hide',
        btnShow: true,
        arreglo: [
            {id: 1,
            descr: "Elem1",
            subelem: [1,2,3]
            },
            {id: 2,
            descr: "Elem2",
            subelem: [1,2,3]
            },
            {id: 3,
            descr: "Elem3",
            subelem: [1,2,3]
            },
            {id: 4,
             descr: "Elem4",
             subelem: [1,2,3]}
        ],
        cssClasses: {
            "bg-warning": true,
            "text-secondary": true
        }
    },
    methods: {
        onClick() {
            this.btnShow = !this.btnShow;
            this.btnLabel = !this.btnShow ? "Show" :"Hide";
        },
        estiloDesdeMetodo() {
            return "background-color: red; color: white"
        }
    },
    computed: {}
})