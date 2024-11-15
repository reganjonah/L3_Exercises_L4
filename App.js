import React, { useState } from "react";
import { Alert, Image, Text, View, Button, ScrollView, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const questions = [
  {
    image: require('./img/Flag_of_Australia_(converted).svg.png'),
    correctAnswer: 'Australia',
    options: ['Australia', 'Denmark', 'New Zealand', 'United Kingdom'],
  },
  {
    image: require('./img/Flag_of_Djibouti.svg.png'),
    correctAnswer: 'Djibouti',
    options: ['USA', 'Djibouti', 'Singapore', 'USA']
  },
  {
    image: require('./img/Flag_of_France.svg.png'),
    correctAnswer: 'France',
    options: ['Germany', 'France', 'Zimbabwe', 'Kenya']
  },
  {
    image: require('./img/Flag_of_Ghana.svg.png'),
    correctAnswer: 'Ghana',
    options: ['Montenegro', 'Portugal', 'Ghana', 'Serbia']
  },
  {
    image: require('./img/Flag_of_Laos.svg.png'),
    correctAnswer: 'Laos',
    options: ['Japan', 'Laos', 'Thailand', 'Cambodia']
  },
  {
    image: require('./img/Flag_of_Indonesia.svg.png'),
    correctAnswer: 'Indonesia',
    options: ['Indonesia', 'Monaco', 'Poland', 'Singapore']
  },
  {
    image: require('./img/Flag_of_Nicaragua.svg.png'),
    correctAnswer: 'Nicaragua',
    options: ['Haiti', 'Nicaragua', 'Dominican Republic', 'Panama']
  },
  {
    image: require('./img/Flag_of_the_Netherlands.svg.png'),
    correctAnswer: 'Netherlands',
    options: ['Indonesia', 'France', 'Netherlands', 'Germany']
  },
];

const QuizApp = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const correctCount = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    let message;

    if (correctCount === questions.length) {
      message = `Excellent! You got all ${questions.length} correct! Good job!`;
    } else if (correctCount >= questions.length / 2) {
      message = `Nice work! You got ${correctCount} out of ${questions.length} correct. Keep it up!`;
    } else {
      message = `You got ${correctCount} out of ${questions.length} correct. Better luck next time!`;
    }

    Alert.alert(message);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>
          Welcome to the Countries & Continents Quiz!
        </Text>
        {questions.map((question, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={styles.questionText}>
                Q{index + 1}) What country's flag is this?
              </Text>
              <Image source={question.image} style={styles.flagImage} />
              <Text style={styles.answerLabel}>Answer:</Text>
              <RNPickerSelect
                  onValueChange={(value) => handleAnswerChange(index, value)}
                  items={question.options.map(option => ({ label: option, value: option }))}
                  style={{
                    inputAndroid: styles.picker,
                    inputIOS: styles.picker
                  }}
              />
            </View>
        ))}
        <View style={styles.buttonContainer}>
          <Button title="Submit Answers" onPress={handleSubmit} color="steelblue" />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#black',
  },
  questionContainer: {
    flex: 1,
    marginBottom: 30,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#black',
    textAlign: 'center',
  },
  flagImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 4,
  },
  answerLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
  },
  picker: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#333',
    backgroundColor: 'lightgray',
    width: '100%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default QuizApp;
