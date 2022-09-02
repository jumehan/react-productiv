import Todo from "./Todo";
import { render } from "@testing-library/react";

let todo = {
  id:3,
  title:"Go to bed",
  description:"In bed by 11:15",
  priority:3}

it("renders without crashing", function () {
  render(<Todo todo = {todo} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo
    todo = {todo}/>);
  expect(asFragment()).toMatchSnapshot();
});

