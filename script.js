// Seleciona os elementos de contagem
const likeBtn = document.querySelector('button[aria-label="Curtir vídeo"]');
const dislikeBtn = document.querySelector('button[aria-label="Não gostei do vídeo"]');
const subscribeBtn = document.querySelector('button[aria-label="Inscrever-se no canal"]');

const likeCounter = document.querySelector(".counters p:nth-child(2)");
const dislikeCounter = document.querySelector(".counters p:nth-child(3)");
const subscriberCounter = document.querySelector(".channel p:nth-child(2)");

let likes = 0;
let dislikes = 0;
let isSubscribed = false;
let subscribers = 0;

// Atualiza o contador de curtidas
likeBtn.addEventListener("click", () => {
    likes++;
    likeCounter.textContent = `Número de likes: ${likes}`;
});

// Atualiza o contador de dislikes
dislikeBtn.addEventListener("click", () => {
    dislikes++;
    dislikeCounter.textContent = `Número de dislikes: ${dislikes}`;
});

// Simula inscrição no canal
subscribeBtn.addEventListener("click", () => {
    isSubscribed = !isSubscribed;
    subscribers += isSubscribed ? 1 : -1;
    subscriberCounter.textContent = `${subscribers} ${subscribers === 1 ? 'inscrito' : 'inscritos'}`;
    subscribeBtn.textContent = isSubscribed ? '🔕 Inscrito' : '🔔 Inscrever-se';
});
