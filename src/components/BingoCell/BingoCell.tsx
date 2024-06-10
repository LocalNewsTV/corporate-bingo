type PropTypes = {
  text: string,
  toggled: boolean,
  clickHandler: () => void,
}

const BingoCell = ({
  text,
  toggled = false,
  clickHandler
}: PropTypes) => {

  return (
    <td onClick={clickHandler}>
      {text} {toggled ? "Toggled" : "Not Toggled"}
    </td>
  )
}

export default BingoCell;
