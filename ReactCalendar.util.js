  export function voltarMes(mes, ano){
    let month = mes === 0 ? 11 : mes -1
    let year =  mes === 0 ? ano -1 : ano
  
    let arrayMes = []
    let ultimoDiaDOMes = new Date(year, month + 1, 0)
  
    let diaInicial = 1
    let diaFim = ultimoDiaDOMes.getDate()
  
    for(var i = diaInicial; i <= diaFim; i++){
      let dia = new Date(year, month, i)
      let obj  ={
        diaMes: dia.getDate(),
        diaSemana: dia.getDay(),
        mes: dia.getMonth(),
        ano: dia.getFullYear()
      }
      arrayMes.push(obj)
    }
  
    let objMes = {
      dias: arrayMes,
      nome: MONTHS[month],
      ano: year
    } 
  
    return objMes
  
  }
  
  export function avancarMes(mes, ano) {
    let month = mes === 11 ? 0 : mes +1
    let year =  mes === 11 ? ano +1 : ano
  
    let arrayMes = []
    let ultimoDiaDOMes = new Date(year, month + 1, 0)
  
    let diaInicial = 1
    let diaFim = ultimoDiaDOMes.getDate()
  
    for(var i = diaInicial; i <= diaFim; i++){
      let dia = new Date(year, month, i)
      let obj  ={
        diaMes: dia.getDate(),
        diaSemana: dia.getDay(),
        mes: dia.getMonth(),
        ano: dia.getFullYear()
      }
      arrayMes.push(obj)
    }
  
    let objMes = {
      dias: arrayMes,
      nome: MONTHS[month],
      ano: year
    } 
  
    return objMes
  }
  
  export function montarMesAtual() {
    let arrayMes = []
    let hoje = new Date()
    let ultimoDiaDOMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0)
  
    let diaInicial = 1
    let diaFim = ultimoDiaDOMes.getDate()
  
    for(var i = diaInicial; i <= diaFim; i++){
      let dia = new Date(hoje.getFullYear(), hoje.getMonth(), i)
      let obj  ={
        diaMes: dia.getDate(),
        diaSemana: dia.getDay(),
        mes: dia.getMonth(),
        ano: dia.getFullYear(),
      }
      arrayMes.push(obj)
    }
    
    let objMes = {
      dias: arrayMes,
      nome: MONTHS[hoje.getMonth()],
      ano: hoje.getFullYear(),
      hoje: hoje.getDate()
    } 
  
    return objMes
  }  

  export function getFullDate(data){
    let dia = new Date(data.ano, data.mes, data.diaMes)

    const date = (dia.getDate()) < 10 ? '0' + (dia.getDate()).toString() : (dia.getDate()).toString()
    const month = (dia.getMonth() + 1) < 10 ? '0' + (dia.getMonth() + 1).toString() : (dia.getMonth() + 1).toString()
    const fullYear = dia.getFullYear()
    var fullDate = date + '/' + month + '/' + fullYear.toString()

    return fullDate
  }
  
  export const MONTHS = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    
  export const WEEKDAYS_LONG = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado'
    ]
    
  export const WEEKDAYS_SHORT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    