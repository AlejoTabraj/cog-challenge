export const CANDIDATE_STATE :any = {
    initial: 'Entrevista inicial',
    states: {
      'Entrevista inicial': {
        on: {
          NEXT: 'Entrevista técnica'
        }
      },
      'Entrevista técnica': {
        on: {
          NEXT: 'Oferta',
          PREVIUS: 'Entrevista inicial'
        }
      },
      Oferta: {
        on: {
          NEXT: 'Asignación',
          PREVIUS: 'Entrevista técnica'
        }
      },
      Asignación: {
        on: {
          NEXT: 'Rechazo',
          PREVIUS: 'Oferta'
        }
      },
      Rechazo: {
        on: {
          PREVIUS: 'Asignación'
        }
      }
    },
    methods: {
        updateState:  (state:String, evento: String)  => {
            console.log(state, evento);
            return CANDIDATE_STATE.states[`${state}`]?.on?.[`${evento}`] || state;
          }
    }
  };
  