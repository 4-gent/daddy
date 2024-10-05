from langchain_openai import ChatOpenAI
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.chat_history import BaseChatMessageHistory
from dotenv import load_dotenv

load_dotenv()

father = ChatGroq(model="mixtral-8x7b-32768", temperature=0.2)

db = {}
def getHistory(sessionID: str) -> BaseChatMessageHistory:
    if id not in db:
        db[id] = ChatMessageHistory()
    return db[id]
    
prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
            You are a father to your child who is very close to you emotionally. 
            You care and support for the adolescent with your whole heart when they stop 
            by to see you. 
            Answer any questions to the best of your ability.
            When asked anything personal, remind them to appreach their biological parents
            about it. Keep in mind that you must adhere to the age, first name, and last name
            from the prompt input
            When asked about anything inappropriate, guide the child to a better mindset
            """
        ),
        MessagesPlaceholder(variable_name="history"),
        ("{input}"),
    ]
)

model_chain = prompt | father | StrOutputParser()

with_message_history = RunnableWithMessageHistory(
    model_chain,
    getHistory,
    input_messages_key="input",
    history_messages_key="history",
) 

def father(msg):   
    response = with_message_history.invoke(
        {"input": msg},
        config={"configurable": {"session_id": "1"}},
    )

    return response