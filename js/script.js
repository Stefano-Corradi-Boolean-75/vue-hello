const { createApp } = Vue;

// in createApp ci sono tutte le informazione dell'app
createApp({

// data contiene tutti i nostri dati
// è un metodo che restituisce un oggeto e dentro questo oggetto mettiamo le nostre "variabili"
  data(){
    return{
      messaggio:'Ciao Vue',
      altroMessaggio: 'Buongiorno',
      miaClasse: 'verde',
      altraClasse: 'sottolineato',
      mioTestoNonHtml: 'Questo è un testo NON HTML',
      mioTestoHtml: 'Questo è un testo <strong>HTML</strong>',
      isTestoShow: true,
      sottolinea: true,
      stampaConIf: 'secondo',
      colori:['red','yellow', 'blue'],
      limit: 10,
      pizze:[
        {
          nome: 'Margherita',
          prezzo: '€ 8:00',
          ingredienti:['pomodoro', 'mozzarella']
        },
        {
          nome: 'Marinara',
          prezzo: '€ 7:00',
          ingredienti:['pomodoro', 'acciughe']
        },
        {
          nome: 'Diavola',
          prezzo: '€ 9:00',
          ingredienti:['pomodoro', 'mozzarella', 'nduja']
        },
      ],
      clock:''
    }
  },
  methods:{
    // methods è un oggetto
    // qui si mettono tutte le funzioni
    // fra una funzione e l'altra bisogna mettere la virgola
    funzioneEstesa : function(){
      console.log('FUNZIONE ESTESA');
    },
    funzioneCompatta(){
      console.log('FUNZIONE COMPATTA');
    },
    arrowFunciotn: () =>{
      console.log('ARROW FUNCT');
    },
    testoRosso(){
      console.log('testo rosso');
      // per utilizzare i data deve sempre utilizzate il this
      console.log('this.miaClasse: ',this.miaClasse);
      this.miaClasse = 'rosso'
    },
    cambiaColore(colore){
      this.miaClasse = colore;
    },
    mostraNascondiTesto(mostraNascondi){
      console.log(mostraNascondi);
      this.isTestoShow = mostraNascondi
    },
    toggleTesto(){
      console.log(this.isTestoShow)
      this.isTestoShow = !this.isTestoShow;
    },
    toggleSottolinea(){
      this.sottolinea = !this.sottolinea;
      console.log(this.sottolinea);
    },
    handlerKeyUp(){
      console.log(this.messaggio);
    },
    addRemoveBox(add){
      if(this.limit > 0 && this.limit < 20){
        add ?  this.limit++ : this.limit--;
      }
    },
    getClock(){
      const d = new Date();
      this.clock =  `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    },
    startClock(){
      // con setInterval dobbiamo usare l'arrow function per poter accedere al this di Vue
      setInterval(() => {
        this.getClock();
      },1000)
    }
  },
  mounted(){
    // azioni che vogliamo scatenare al caricamento dell'app
    console.log('APP MONTATA')

    // in console log vediamo il Porxy object ma lo utilizziamo come un oggetto normale
    console.log(this.pizze)

    // faccio stampare al caricamento del DOM l'orologio
    this.getClock();
    // al caricamento parte la funzione che gestisce il setInterval dell'orologio
    this.startClock();
  },
  created(){
    // azioni che vogliamo scatenare all'inizializzazione delle options
    console.log('APP CREATA')
  },

}).mount('#app') // #app è il div che contiene l'app vue