/*
[X] Saber quando o botao foi clicado
[X] Pegar o texto do textarea
[X] Enviar para IA
[X] Pegar a resposta da IA
[ ] Colocar na tela  
    [] Código
    [] Resultado do código

    HTML - document
    JAVA - script
*/

let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarCodigo() {
    /*async = vou sair do codigo java*/
    /*fetch - buscar dados na internet (groq)*/

    let textarea = document.querySelector(".texto-pagina").value
    //token /bearer
    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            //IA que vamos ultilizar
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": `
Você é um desenvolvedor e web designer sênior especialista em criar landing pages modernas e visualmente profissionais.

OBJETIVO:
Criar páginas bonitas, responsivas e com aparência real de startup moderna.

REGRAS OBRIGATÓRIAS:

- Responda APENAS com código HTML completo.
- Inclua o CSS dentro da tag <style>.
- Inclua o JavaScript dentro da tag <script> se necessário.
- NÃO explique nada fora do código.
- A página deve ser totalmente responsiva.
- Use design moderno inspirado em sites reais.
- Utilize espaçamento profissional.
- Use tipografia bonita.
- Use paleta de cores harmoniosa.
- Crie seções visualmente separadas.
- Utilize sombras suaves.
- Use bordas arredondadas modernas.
- Crie efeito hover nos botões.
- Crie um hero section forte.
- Use cards modernos.
- Use ícones SVG simples quando necessário.
- Use animações suaves.
- Use layout clean e premium.
- Evite aparência genérica de IA.
- Crie uma navbar moderna.
- Crie footer profissional.
- Use boas práticas de UX/UI.
- O código deve ficar organizado e bem indentado.

ESTRUTURA ESPERADA:
- Navbar
- Hero section
- Sessão de serviços
- Sessão de benefícios
- Sessão de depoimentos
- CTA final
- Footer

ESTILO VISUAL:
- Visual premium
- Estilo startup SaaS moderna
- Minimalista
- Elegante
- Fundo limpo
- Boa hierarquia visual

IMPORTANTE:
Toda a página deve estar em português do Brasil.
`
                }
            ],
        })

    })


    let dados = await resposta.json()
    console.log(dados)

    let resultado = dados.choices[0].message.content
    console.log(resultado)

    let codigo = document.querySelector(".bloco-codigo")
    codigo.textContent = resultado


    let site = document.querySelector(".bloco-site")
    site.srcdoc = resultado
}
