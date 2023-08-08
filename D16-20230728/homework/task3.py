lists = [2,3,5,4,7,9,8,6]
sum = 5
# pairs = []
# h=""

def target_sum(nums):
    for i in range(len(nums)):
        # print(i)
        for j in range(i+1,len(nums)):
            # print(j)
            if nums[i]+nums[j] == sum:
                print(nums[i],",",nums[j])
                # h=h+f"({nums[i]},{nums[j]})"

target_sum(lists)