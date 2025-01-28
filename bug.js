```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Only updates when count is 0
    if (count === 0) {
      fetch('/api/data')
        .then(res => res.json())
        .then(data => {
          // ... further operations
        });
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```