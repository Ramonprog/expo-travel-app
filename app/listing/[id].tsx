import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ListingDetails() {
  const { id } = useLocalSearchParams()
  useEffect(() => {
    console.log('id chegou aqui', id)
  }, [])
  return (
    <View>
      <Text>ListingDetails {id}</Text>
    </View>
  )
}