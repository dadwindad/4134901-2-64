const number = [5, 2];
const text = (
  <>
    <h1 className="red" id="test">
      Hello World !!!{" "}
    </h1>
    <br></br> {number[0] + number[1]}
  </>
);

//stateless
function List() {
  return text;
}

export default List;
