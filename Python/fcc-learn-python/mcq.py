from Question import Question

question_prompts = [
    "What colour is broccoli?\n(a) Green \n(b) Blue \n(c) Purple\n\n",
    "What colour is a carrot?\n(a) Black \n(b) Orange \n(c) Red\n\n",
    "What colour is a tomato?\n(a) Red \n(b) Teal \n(c) Violet\n\n"
]

questions = [
    Question(question_prompts[0], "a"),
    Question(question_prompts[1], "b"),
    Question(question_prompts[2], "a"),
]

def run_test(questions):
    score = 0
    for qn in questions:
        answer = input(qn.prompt)
        if answer == qn.answer:
            score += 1
    print("Your final score is " + str(score) + " out of " + str(len(questions)) + ".\n")

run_test(questions)