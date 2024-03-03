
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import React from "react";

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    handleCountFeedback = (option) => {
        this.setState( prev => ({ [option]: prev[option] + 1}) )
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    
    countPositiveFeedbackPercentage() { 
        const total = this.countTotalFeedback()
        const { good } = this.state;
        return  Math.round((good / total) * 100);
        
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage(); 

        return (
            <>
                <h1>Please leave feedback</h1>
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleCountFeedback} />

                {total > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) : (<h2>There is no feedback</h2>)}
                
        </>)
    }
}