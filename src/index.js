// Kind Words AI ✨ by Karina

let form = document.querySelector("#kind-form");
let output = document.querySelector("#output");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  let topicInput = document.querySelector("#topic-input");
  let topic = topicInput.value.trim();

  if (topic === "") {
    output.innerHTML = "Please type something thats on your mind 🌸";
    return;
  }
   
  output.innerHTML = "Generating your kind words… 🌷";

  let apiKey = "oa13410f1922d7b4t12b44ae83ead081";
  let prompt = encodeURIComponent(
    `Write a short, gentle, and uplifting message about ${topic}. It should sound like a friend offering kind words.`
  );
  let context = encodeURIComponent(
    "You are a kind and understanding AI who comforts users."
  );

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  try {
    let response = await axios.get(apiUrl);
    let message = response.data.answer;
    typeWriterEffect(message);
  } catch (error) {
    output.innerHTML = "Something went wrong — please try again later 🌻";
    console.error(error);
  }
});

// 🌸 Typewriter Animation
function typeWriterEffect(text) {
  output.innerHTML = ""; // clear before starting
  let index = 0;

  function type() {
    if (index < text.length) {
      output.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 35); // typing speed
    }
  }
  type();
}
