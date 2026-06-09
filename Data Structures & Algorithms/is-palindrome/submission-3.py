class Solution:
    def isPalindrome(self, s):
        
        filtered = ""
        filteredLength = 0
        for i in range(len(s)):
            if s[i].isalnum():
                filtered += s[i].lower()
                filteredLength += 1


        for i in range(filteredLength // 2):
            pointerA = filtered[i]
            pointerB = filtered[filteredLength - 1 - i]
            # print(f"this is PointerA: {pointerA} ===== {pointerB}: this is pointerB")

            if pointerA != pointerB:
                return False
                
        return True