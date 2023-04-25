import { View } from '../../components/Themed';
import { FlatList } from 'react-native';
import VideoSlider from '../../components/VideoSlider';

import categories, { VideoCategory } from '../../assets/data/categories';

import { styles } from './styles';

const Home = (): JSX.Element => {
	return (
		<View style={styles.container}>
			{
				<FlatList
					data={categories.items}
					renderItem={({ item }: { item: VideoCategory }) => {
						return <VideoSlider category={item} />;
					}}
				/>
			}
		</View>
	);
};

export default Home;
