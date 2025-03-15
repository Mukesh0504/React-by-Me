n = int(input("enter the length:"))
arr = []

if n <= 0:
    print("Please enter a positive integer.")
    exit()

arr = list(map(int, input("enter the number").split()))


if len(arr) != n:
    print(f"Please enter exactly {n} numbers.")
    exit()

mid = n // 2
print(mid)

prod1 = 1
prod2 = 1

for i in range(0, mid):
    prod1 *= arr[i]
print(prod1)


for j in range(mid, n):
    prod2 *= arr[j]
print(prod2)


if prod1 < prod2:
    arr.reverse()

print(arr)
