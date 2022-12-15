type personListProps = {
    names: {
        id: number;
        fName: string;
        lName: string;
      }[]
}

export const PersonList = (props: personListProps) => {
    return (
        <div>
          {props.names.map(name => {
            return (
              <h2 key={name.id}>
                {name.fName} {name.lName}
              </h2>
            )
          })}
        </div>
    )
  }
  