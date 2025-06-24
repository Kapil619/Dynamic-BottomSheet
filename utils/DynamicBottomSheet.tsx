import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Dimensions, LayoutChangeEvent, StyleSheet, View } from "react-native";

type DynamicBottomSheetProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  sheetContentStyle?: object;
  contentPaddingStyle?: object;
};

const SCREEN_HEIGHT = Dimensions.get("window").height;
const MAX_SHEET_HEIGHT = SCREEN_HEIGHT * 0.8;

const DynamicBottomSheet: React.FC<DynamicBottomSheetProps> = ({
  visible,
  onClose,
  children,
  sheetContentStyle,
  contentPaddingStyle,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const snapPoints = useMemo(() => {
    if (!contentHeight) return ["1%"];
    if (contentHeight < MAX_SHEET_HEIGHT) {
      return [contentHeight];
    }
    return [MAX_SHEET_HEIGHT, contentHeight];
  }, [contentHeight]);

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [visible]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) onClose();
    },
    [onClose]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
    >
      <BottomSheetScrollView
        style={[styles.sheetContent, sheetContentStyle]}
        nestedScrollEnabled={true}
      >
        <View
          style={[styles.contentPadding, contentPaddingStyle]}
          onLayout={(event: LayoutChangeEvent) =>
            setContentHeight(event.nativeEvent.layout.height)
          }
        >
          {children}
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetContent: {
    backgroundColor: "white",
  },
  contentPadding: {
    padding: 20,
  },
});

export default DynamicBottomSheet;
