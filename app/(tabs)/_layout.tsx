import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

const TabLayout = (): JSX.Element => {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="coming-soon/index"
				options={{
					title: 'Coming Soon',
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="video-library"
							size={24}
							color={color}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="search/index"
				options={{
					title: 'Search',
					tabBarIcon: ({ color }) => (
						<Ionicons name="search" size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="downloads/index"
				options={{
					title: 'Downloads',
					tabBarIcon: ({ color }) => (
						<AntDesign name="download" size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
