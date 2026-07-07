const answers = {
  rag: "RAG means the app searches trusted notes first, then uses those notes to answer.",
  agent:
    "A tool-using agent picks a tool, runs it, and returns the result to the user.",
  eval:
    "An eval is a small test that checks if the AI answer did what I expected.",
};

document.querySelector("#ask-button").addEventListener("click", () => {
  const question = document.querySelector("#question").value.toLowerCase();
  let answer = "This is a static demo, so it only has a few sample answers.";

  if (question.includes("rag")) {
    answer = answers.rag;
  } else if (question.includes("agent") || question.includes("tool")) {
    answer = answers.agent;
  } else if (question.includes("eval") || question.includes("test")) {
    answer = answers.eval;
  }

  document.querySelector("#answer").textContent = answer;
});
