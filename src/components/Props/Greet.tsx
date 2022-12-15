type greetProps = {
    name: string;
    isLoggedIn: boolean;
    count: {
        message: number;
    }
}

export const Greet = (props: greetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Hi ${props.name}, this is starting of reactjs typescript.` : `Welcome Guest`
                }
            </h2>
            <h2>
                {
                    props.isLoggedIn ? `You have ${props.count.message} messages.` : ``
                }
            </h2>
        </div>
    )
  }
  