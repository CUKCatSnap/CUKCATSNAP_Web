import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
interface RatingComponentProps {
  onRatingChange: (rating: number) => void;
}

const RatingStar: React.FC<RatingComponentProps> = ({onRatingChange}) => {
  const [rating, setRating] = useState(0);

  const handleRatingPress = (newRating: number) => {
    setRating(newRating);
    onRatingChange(newRating);
  };
  return (
    <View>
      <StarRating rating={rating} starSize={25} onChange={handleRatingPress} />
    </View>
  );
};

export default RatingStar;
