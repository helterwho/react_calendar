import React, { Component } from 'react'
import './ReactCalendar.style.css'
import { montarMesAtual, voltarMes, avancarMes, WEEKDAYS_SHORT } from './ReactCalendar.util'

export class ReactCalendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mesRenderizado: null,
      anoRenderizado: null,
      diasRenderizado: [],
      indexMesSelecionado: 0,
      hoje: null,
      selectedDay: null,
      compromissosIdsPorDatas: [],
      compromissos: []
    }

  }
 
  atualizarVisaoMes = (index) =>{
    this.setState({indexMesSelecionado: index})

    switch (index){
      case 0:
        this.renderizarMesAtual()
        break
      case 1:
        this.renderizarMesAnterior()
        break
      case 2:
        this.renderizarMesSeguinte()
        break
      default:
        this.renderizarMesAtual()
        break
    }

  }

  renderizarMesAnterior = () =>{
    const {dias, nome, ano} =  (voltarMes(this.state.diasRenderizado[0].mes,
      this.state.anoRenderizado))
    this.setState({diasRenderizado: dias,
      anoRenderizado: ano,
      mesRenderizado: nome
    })
  }

  renderizarMesSeguinte = () =>{
    const {dias, nome, ano} =  (avancarMes(this.state.diasRenderizado[0].mes,
      this.state.anoRenderizado))
    this.setState({diasRenderizado: dias,
      anoRenderizado: ano,
      mesRenderizado: nome
    })
  }

  renderizarMesAtual= () => {
    const {dias, nome, ano, hoje} =  (montarMesAtual())
    this.setState({diasRenderizado: dias,
      anoRenderizado: ano,
      mesRenderizado: nome,
      hoje: hoje,
      mesAtual: dias[0].mes
    })
  }

  render () {
    const {diasRenderizado, mesRenderizado, anoRenderizado,
       indexMesSelecionado, hoje, mesAtual, selectedDay} =  this.state


    return (
      <div className='reactCalendar__container'>
        <div className='reactCalendar__container_top'>
          <div className ='reactCalendar__container_top_up'>
            <span> {`${mesRenderizado} de ${anoRenderizado}`} </span>
          </div>

          <div className ='reactCalendar__container_top_up'>
            <div className='reactCalendar__switcher_container'>
              <div className='reactCalendar__switcher_option' 
                onClick={()=> this.atualizarVisaoMes(0)}>
                <span style={indexMesSelecionado === 0 
                  ? {color: 'var(--green)'} 
                  : {}}>Atual
                </span>
              </div>

              <div className='reactCalendar__switcher_option' 
                onClick={()=> this.atualizarVisaoMes(1)} 
                style={{borderLeft:'1px solid #D7DAE2', 
                borderRight:'1px solid #D7DAE2'}}>
                <span style={indexMesSelecionado === 1 
                  ? {color: 'var(--green)'} 
                  : {}}>Anterior
                </span>
              </div>

              <div className='reactCalendar__switcher_option' 
                onClick={()=> this.atualizarVisaoMes(2)}>
                <span style={indexMesSelecionado === 2 
                ? {color: 'var(--green)'} 
                : {}}>Próximo</span>
              </div>
            </div>
          </div>

        </div>
        <div className='reactCalendar__week_days_container'>
            { WEEKDAYS_SHORT.map((diaDaSemana, diaIndex)=>{
              return(
                <div className='reactCalendar__week_day_container'>
                  <div className='reactCalendar__week_day_title'>
                    <span> {diaDaSemana} </span>
                  </div>

                  {
                    diasRenderizado.map((dia)=>{
                      if(diaIndex < diasRenderizado[0].diaSemana 
                        && dia.diaMes === diasRenderizado[0].diaMes)
                        return <div className='reactCalendar__week_day' />
                      else if(dia.diaSemana === diaIndex){
                        return <div className= { 
                          JSON.stringify(dia) === JSON.stringify(selectedDay) 
                            ? 'reactCalendar__week_day_selected' 
                            : 'reactCalendar__week_day'
                        }> 
                          <div className='reactCalendar__week_day_top'>
                            <span className={hoje === dia.diaMes 
                              && mesAtual === dia.mes 
                              ? 'reactCalendar__week_day_title_today' 
                              :''}> 
                            {dia.diaMes} 
                          </span> 
                          </div>
                        </div>
                        }
                    })
                  }
                </div>
              )
            })
            }
        </div>
      </div>
    )
  }
}
