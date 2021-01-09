import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import './App.css';

export class App extends Component {
  state = {
    website: {},
  }
  getwebsite() {
    this.setState({website : JsonData})
  }

  componentDidMount() {
    this.getwebsite();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.website.Header} />
        <Features data={this.state.website.Features} />
        <About data={this.state.website.About} />
        <Services data={this.state.website.Services} />
        <Gallery />
        <Testimonials data={this.state.website.Testimonials} />
        <Team data={this.state.website.Team} />
        <Contact data={this.state.website.Contact} />
      </div>
    )
  }
}

export default App;