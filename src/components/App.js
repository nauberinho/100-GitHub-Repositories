import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';

/*Importing necessary actions*/
import {
    togglePage,
    fetchRepos
} from '../actions/commonActions';

class App extends Component {
    /*Fetching all the repositories whenever this component will render*/
    componentWillMount(){
        this.props.fetchRepos();
    }
  render() {
      {/*Defining necessary data from redux state.*/}
      let state = this.props.mainState;
      let someRepos = state.someRepos;

      {/*Creating one table row for each repository.*/}
      let someReposLi = someRepos.map( (repo, key) => {
          let trClass;
          if((key%2 == 0)){
              trClass = 'tr-even';
          }
          else{
              trClass = 'tr-odd';
          }
          return (
              <tr className={trClass}>
                  <td className="td">{repo.name}</td>
                  <td className="td"><a href={repo.html_url}>{repo.html_url}</a></td>
                  <td className="td">{repo.stargazers_count} stars</td>
                  <td className="td">{repo.forks}</td>
              </tr>
          )
      })

      return (
          /*Rendering the table and arrow buttons*/
          <div className="component-container">
              <div className="table-wrapper">
                  <header> <span>"100 GitHub repositories" by <span className="title-name">Niklas Nauber</span></span></header>
                  <table className="table">
                      <tr className="t-header">
                          <th className="th">Name</th>
                          <th className="th">URL</th>
                          <th className="th">Stargazer stars</th>
                          <th className="th">Forks</th>
                      </tr>


                            {someReposLi}


                  </table>

              </div>
              <div className="toggle-wrapper">
                  <div className="toggle-button"><div data-arrow="left" onClick={this.props.togglePage} className="cover-div"></div><i class="material-icons arrow">keyboard_arrow_left</i></div>
                  <div className="display-index"><span>{state.index} - {state.index + 20}</span></div>
                  <div className="toggle-button"><div data-arrow="right" onClick={this.props.togglePage} className="cover-div"></div><i class="material-icons arrow">keyboard_arrow_right</i></div>
              </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        mainState: state.mainReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglePage: (e) => {
            dispatch( togglePage(e))
        },
        fetchRepos: (e) => {
            dispatch( fetchRepos(e))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
