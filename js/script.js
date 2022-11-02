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
      mioTestoNonHtml: 'Questo è un testo NON HTML',
      mioTestoHtml: 'Questo è un testo <strong>HTML</strong>',
      isTestoShow: true
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
      this.isTestoShow = !this.isTestoShow;
    }
  }

}).mount('#app') // #app è il div che contiene l'app vue