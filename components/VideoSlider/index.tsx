import { Text, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { VideoCategory } from '../../assets/data/categories';

const VideoSlider = ({
	category,
}: {
	category: VideoCategory;
}): JSX.Element => {
	return (
		<>
			<Text style={styles.heading}>{category.title}</Text>
			<FlatList
				horizontal={true}
				scrollEnabled={true}
				data={category.movies}
				renderItem={({ item }) => {
					return (
						<Image
							style={styles.image}
							source={{ uri: item.poster }}
						/>
					);
				}}
			/>
		</>
	);
};

export default VideoSlider;
