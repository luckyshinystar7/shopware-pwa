import { ref } from "vue-demi";
import * as Composables from "@shopware-pwa/composables";
jest.mock("@shopware-pwa/composables");
const mockedComposables = Composables as jest.Mocked<typeof Composables>;

import { useUIState } from "../src/logic/useUIState";

describe("Composables - useUIState", () => {
  const rootContextMock: any = {
    $shopwareApiInstance: jest.fn(),
  };
  const stateSharedRef = ref();

  beforeEach(() => {
    jest.resetAllMocks();
    stateSharedRef.value = false;

    mockedComposables.useSharedState.mockImplementation(() => {
      return {
        sharedRef: () => stateSharedRef,
      } as any;
    });
  });
  describe("local state", () => {
    it("should have isOpen state false by default", () => {
      const { isOpen } = useUIState(rootContextMock);
      expect(isOpen.value).toEqual(false);
    });

    it("should change UI state", () => {
      const { isOpen, switchState } = useUIState(rootContextMock);
      switchState();
      expect(isOpen.value).toEqual(true);
    });

    it("should change only local state", () => {
      const { isOpen, switchState } = useUIState(rootContextMock);
      const { isOpen: isOpen2 } = useUIState(rootContextMock);
      switchState();
      expect(isOpen.value).toEqual(true);
      expect(isOpen2.value).toEqual(false);
    });

    it("should change state to desired", () => {
      const { isOpen, switchState } = useUIState(rootContextMock);
      expect(isOpen.value).toEqual(false);
      switchState();
      expect(isOpen.value).toEqual(true);
      switchState(true);
      expect(isOpen.value).toEqual(true);
      switchState(false);
      expect(isOpen.value).toEqual(false);
    });
  });

  describe("shared state", () => {
    it("should have isOpen state false by default", () => {
      const { isOpen } = useUIState(rootContextMock, "some-test-key");
      expect(isOpen.value).toEqual(false);
    });

    it("should change UI state in multiple instances", () => {
      const { isOpen, switchState } = useUIState(
        rootContextMock,
        "some-test-key2"
      );
      const { isOpen: isOpen2 } = useUIState(rootContextMock, "some-test-key2");
      expect(isOpen.value).toEqual(false);
      switchState();
      expect(isOpen.value).toEqual(true);
      expect(isOpen2.value).toEqual(true);
    });

    it("should change shared instance to desired state", () => {
      const { isOpen, switchState } = useUIState(
        rootContextMock,
        "some-test-key3"
      );
      const { isOpen: isOpen2 } = useUIState(rootContextMock, "some-test-key3");
      expect(isOpen.value).toEqual(false);
      expect(isOpen2.value).toEqual(false);
      switchState();
      expect(isOpen.value).toEqual(true);
      expect(isOpen2.value).toEqual(true);
      switchState(true);
      expect(isOpen.value).toEqual(true);
      expect(isOpen2.value).toEqual(true);
      switchState(false);
      expect(isOpen.value).toEqual(false);
      expect(isOpen2.value).toEqual(false);
    });
  });
});
