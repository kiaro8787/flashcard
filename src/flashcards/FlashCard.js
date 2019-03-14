import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import { firebaseConfig } from './Config/Firebase/config';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import './FlashCard.css';

class FlashCard extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(firebaseConfig);
    }
    this.database = this.app.database().ref().child('cards');
    this.storageRef = this.app.storage().ref();

    this.state = {
      cards: [],
      currentCard: {}
    }
    this.updateCard = this.updateCard.bind(this);
  }

  getRandomCard(currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  componentWillMount() {
    let cards = this.state.cards;
    this.database.on('child_added', snapshot => {
      snapshot.val().forEach((area, index) => {
        cards.push({
          id: index,
          area: snapshot.key,
          frontimage: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${area.frontimage}?alt=media`,
          behindimage: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${area.behindimage}?alt=media`,
          country: area.country,
          capital: area.capital,
        })
      })
      this.setState({
        cards: cards,
        currentCard: this.getRandomCard(cards)
      })
    })
  }

  updateCard() {
    const cards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(cards)
    })
  }

  // TODO:カードをエリアで絞る。それ用のstateが必要？
  filterCard() {
    const cards = this.state.cards.filter(item => item.area === "SouthAmerica");
    this.setState({
      currentCard: this.getRandomCard(cards)
    })
  }

  render() {
    return (
      <div>
        <Card area={ this.state.currentCard.area }
              frontimage={ this.state.currentCard.frontimage }
              behindimage={ this.state.currentCard.behindimage }
              country={ this.state.currentCard.country }
              capital={ this.state.currentCard.capital } />
        <DrawButton drawCard={ this.updateCard } />
      </div>
    );
  }
}

export default FlashCard;
