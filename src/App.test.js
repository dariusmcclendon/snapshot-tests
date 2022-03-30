import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
import GitHubCard from './components/GitHubCard'
test('renders a snapchot', ()=>{
  let tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
test('snapshot of GitHubCard', ()=>{
  let tree = renderer.create(<GitHubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
})