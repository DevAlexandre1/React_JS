

const Cronometro = () => {

        var hh = 0;
        var mm = 0;
        var ss = 0;

        var tempo = 1000;//Quantos milésimos valem 1 segundo?
        var cron;

        //Inicia o temporizador
        const start = ()=> {
            cron = setInterval(() => { timer(); }, tempo);
        }

        //Para o temporizador mas não limpa as variáveis
        const pause = ()=> {
            clearInterval(cron);
        }

        //Para o temporizador e limpa as variáveis
        const stop = () => {
            clearInterval(cron);
            hh = 0;
            mm = 0;
            ss = 0;

            document.getElementById('counter').innerText = '00:00:00';
        }

        //Faz a contagem do tempo e exibição
        function timer() {
            ss++; //Incrementa +1 na variável ss

            if (ss == 59) { //Verifica se deu 59 segundos
                ss = 0; //Volta os segundos para 0
                mm++; //Adiciona +1 na variável mm

                if (mm == 59) { //Verifica se deu 59 minutos
                    mm = 0;//Volta os minutos para 0
                    hh++;//Adiciona +1 na variável hora
                }
            }

            //Cria uma variável com o valor tratado HH:MM:SS
            var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
            
            //Insere o valor tratado no elemento counter
            document.getElementById('counter').innerText = format;

            //Retorna o valor tratado
            return format;
        }

        return (
            <div>
                <div class="max-width">
                    <button onclick={start} class="bg-green">Iniciar</button>
                    <button onclick={pause} class="bg-yellow">Pausar</button>
                    <button onclick={stop} class="bg-red">Parar</button>
                    <h1 id="counter">00:00:00</h1>
                </div>
            </div>
        )
        }

export default Cronometro