class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded = ""
        for s in strs:
            encoded += str(len(s)) + "#" + s
        return encoded

    def decode(self, s: str) -> List[str]:
        decoded = []
        i = 0

        while i < len(s):
            j = i
            # find delimiter (#)
            while s[j] != "#":
                j += 1
            
            word_length = int(s[i:j])
            word_start_index = j + 1
            word_end_index = word_start_index + word_length
            word = s[word_start_index : word_end_index]

            decoded.append(word)
            i = word_end_index

        return decoded
