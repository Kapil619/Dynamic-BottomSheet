import { featureCards, horizontalCards, verticalCards } from "@/utils/data";
import DynamicBottomSheet from "@/utils/DynamicBottomSheet";
import { styles } from "@/utils/styles";
import { Card } from "@/utils/types";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function App() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleCardPress = useCallback((card: Card) => {
    setSelectedCard(card);
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.mainContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Kapil Badokar</Text>
            <Text style={styles.headerSubtitle}>Assignment for Hipster</Text>
          </View>

          {/* Horizontal Cards */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trending</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScroll}
              contentContainerStyle={{ paddingRight: 20 }}
            >
              {horizontalCards.map((item, idx) => (
                <View key={item.id} style={[styles.horizontalCard]}>
                  <Text style={styles.horizontalTitle}>{item.title}</Text>
                  <Text style={styles.horizontalSubtitle}>{item.subtitle}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Vertical Cards */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured</Text>
            {verticalCards.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.verticalCard}
                onPress={() => handleCardPress(item)}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Sheet */}
        <DynamicBottomSheet
          visible={!!selectedCard}
          onClose={() => setSelectedCard(null)}
        >
          {selectedCard && (
            <>
              <Text style={styles.sheetTitle}>{selectedCard.title}</Text>
              <Text style={styles.sheetDescription}>
                {selectedCard.details}
              </Text>
              <Text style={styles.sectionTitle}>Features</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalContainer}
                contentContainerStyle={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                nestedScrollEnabled={true}
                keyboardShouldPersistTaps="handled"
              >
                {featureCards.map((card) => (
                  <TouchableOpacity
                    key={card.id}
                    style={[
                      styles.featureCard,
                      { backgroundColor: card.color },
                    ]}
                  >
                    <Text style={styles.featureIcon}>{card.icon}</Text>
                    <Text style={styles.featureTitle}>{card.title}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
        </DynamicBottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
