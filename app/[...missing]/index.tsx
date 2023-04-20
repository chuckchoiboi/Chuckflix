import { Link, Stack } from 'expo-router';

import { Text, View } from '../../components/Themed';

import { styles } from '../styles';

const NotFoundScreen = (): JSX.Element => {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View style={styles.container}>
				<Text style={styles.title}>This screen doesn't exist.</Text>

				<Link href="/" style={styles.link}>
					<Text style={styles.linkText}>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
};

export default NotFoundScreen;
